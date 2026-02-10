import {
  generateFibonacci,
  filterPrimes,
  calculateHCF,
  calculateLCM
} from "../utils/math.utils.js";

import { askAI } from "../utils/ai.utils.js";

export const handleBFHL = async (req, res) => {
  try {
    const body = req.body;

    if (!body || Object.keys(body).length !== 1) {
      return res.status(400).json({
        is_success: false,
        message: "Request must contain exactly one key"
      });
    }

    // 🔧 FIX: normalize key (THIS IS THE ONLY REAL CHANGE)
    const rawKey = Object.keys(body)[0];
    const key = rawKey.toLowerCase();
    const value = body[rawKey];

    let data;

    switch (key) {
      case "fibonacci":
        data = generateFibonacci(value);
        break;

      case "prime":
        data = filterPrimes(value);
        break;

      case "hcf":
        data = calculateHCF(value);
        break;

      case "lcm":
        data = calculateLCM(value);
        break;

      case "ai":
        data = await askAI(value);
        break;

      default:
        return res.status(400).json({
          is_success: false,
          message: "Invalid key"
        });
    }

    return res.status(200).json({
      is_success: true,
      official_email: "yaman2484.be23@chitkara.edu.in",
      data
    });

  } catch (err) {
    return res.status(500).json({
      is_success: false,
      message: err.message,
      message: "Internal server error"
    });
  }
};
