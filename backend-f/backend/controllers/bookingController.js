const Booking = require("../models/bookingModel");
const Medicine = require("../models/medicineModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//create a booking 

const createBooking = catchAsyncErrors(async(req,res,next)=>{
   try{

       const booking = await Booking.create({...req.body,user:req.user.id});
       const medicine = await Medicine.findById(req.body.medicine);
       await medicine.updateQuantity(req.body.quantity);
       res.status(200).json({
           success:true,
           message:"Booking created successfully",
           booking
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
})

//get all bookings 
const getAllBookings = catchAsyncErrors(async(req,res,next)=>{
    try{
        const bookings = await Booking.find();
        res.status(200).json({
            success:true,
            bookings
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
})

module.exports = {
  createBooking,
  getAllBookings,
};