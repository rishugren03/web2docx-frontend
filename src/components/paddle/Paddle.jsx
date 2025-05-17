import { useEffect, useState } from "react";
import { initializePaddle } from "@paddle/paddle-js";

export function usePaddleCheckout() {
  const [paddle, setPaddle] = useState(null);

  useEffect(() => {
    // Initialize Paddle
    initializePaddle({
      environment: "sandbox",
      token: "test_e0e635838fad18b752415cd8101",
    }).then((paddleInstance) => {
      if (paddleInstance) {
        setPaddle(paddleInstance);
      }
    });
  }, []);

  const openCheckout = () => {
    if (!paddle) {
      console.error("Paddle is not initialized yet");
      return;
    }

    paddle.Checkout.open({
      items: [{ priceId: "pri_01jv8g6mbwy6f6p2gws521yd1r" }],
    });
  };

  return { paddle, openCheckout };
}

// reviews - https://www.producthunt.com/products/web2docx/reviews/new
