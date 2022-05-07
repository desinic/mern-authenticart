const Edit = require( "../models/EditModel" );
const LetsTalk = require( "../models/LetsTalkModel" );
const Services = require( "../models/ServicesModel" );
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create About Description
exports.createAboutDesc = catchAsyncErrors(async (req, res, next) => {
    const aboutDesc = await Edit.create(req.body);

    res.status(201).json({
        success: true,
        aboutDesc,
    });
} );

// Get About Description
exports.getAboutDesc = catchAsyncErrors(async (req, res, next) => {
    const aboutDescs = await Edit.find();

    res.status(200).json({
        success: true,
        aboutDescs,
    });
} );

exports.updateAboutDesc = catchAsyncErrors(async (req, res, next) => {
    let aboutDesc = await Edit.findById(req.params.id);

    if (!aboutDesc) {
        return next(new ErrorHander("About Description is not found", 404));
    }
    aboutDesc = await Edit.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    
    res.status(200).json({
        success: true,
        aboutDesc,
    });
});


// Create About Description
exports.createLetsTalkDesc = catchAsyncErrors(async (req, res, next) => {
    const letsTalkDesc = await LetsTalk.create(req.body);

    res.status(201).json({
        success: true,
        letsTalkDesc,
    });
} );

// Get About Description
exports.getLetsTalkDesc = catchAsyncErrors(async (req, res, next) => {
    const letsTalkDescs = await LetsTalk.find();

    res.status(200).json({
        success: true,
        letsTalkDescs,
    });
} );

exports.updateLetsTalkDesc = catchAsyncErrors(async (req, res, next) => {
    let letsTalkDesc = await LetsTalk.findById(req.params.id);

    if (!letsTalkDesc) {
        return next(new ErrorHander("Let's Talk Description is not found", 404));
    }
    letsTalkDesc = await LetsTalk.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    
    res.status(200).json({
        success: true,
        letsTalkDesc,
    });
});


//Services

// Create Services Description
exports.createServicesDesc = catchAsyncErrors(async (req, res, next) => {
    const servicesDesc = await Services.create(req.body);

    res.status(201).json({
        success: true,
        servicesDesc,
    });
} );

// Get Services Description
exports.getServicesDesc = catchAsyncErrors(async (req, res, next) => {
    const servicesDescs = await Services.find();

    res.status(200).json({
        success: true,
        servicesDescs,
    });
} );

exports.updateServicesDesc = catchAsyncErrors(async (req, res, next) => {
    let servicesDesc = await Services.findById(req.params.id);

    if (!servicesDesc) {
        return next(new ErrorHander("Services Description is not found", 404));
    }
    servicesDesc = await Services.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    
    res.status(200).json({
        success: true,
        servicesDesc,
    });
});