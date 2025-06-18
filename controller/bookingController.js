const Booking = require('../models/Booking')

exports.bookMajor = async (req, res) => {
    const { projectId } = req.body;
    const userId = req.userId; // set by JWT middleware
    
    // Here you should check if the project is free or not, and if the user is a club member
    // But let's simplify:
    // 1. find project first
    // 2. if it's free OR you are a club, allow booking
    
    const project = await Major.findById(projectId);
    if (!project) return res.status(404).json({ message: "Not found" });

    // If not free, you need to check if the user is a club
    const User = require('../models/User'); 
    const user = await User.findById(userId);
    if (!project.isFree && !user.isClubMember) {
        return res.status(403).json({ message: "Membership required" });
    }
    // If checks pass, create booking
    await Booking.create({ projectId, userId });

    res.json({ message: "Booking successful!" });
};

