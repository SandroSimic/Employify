import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";

const getLoggedInUser = catchAsync(async (req, res, next) => {
  const userId = req.user?._id;

  if (!userId) {
    return next(
      new AppError("You must be logged in to perform this action", 404)
    );
  }

  const user = await User.findById(userId).populate("companyId")

  if (!user || user === undefined) {
    return next(new AppError("User not found", 404));
  }

  res.status(200).json({ user });
});

export { getLoggedInUser };
