export const healthCheck = (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: "yaman2484.be23@chitkara.edu.in"
  });
};
