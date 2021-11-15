const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcryptjs`);
//import testimonial controller..
const Testimonial= require(`../models/Testimonial.schema`);
const { request, response } = require("express");


//add a new Testimonial

const addTestimonial = async (request, response) => {
    
    const { Name, Photo, Post, TestimonialDescription} = request.body;
    console.log("body: ", request.body);
   
    try {
        // const isExist = await testimonial.findOne({Name});
        // if (isExist) {
        //     return response.status(400).json("already exist");
        // }
        const details = new Testimonial({
            Name,
            Post,
            Photo,
            TestimonialDescription
        });
        await details.save()
        console.log("suucess")
        response.status(201).json({ details });
    }
    catch (error) {
        console.log("error  ", error);
        return response.status(500).json("Something went wrong !!")
    }
}
// exports.addTestimonial = addTestimonial;
//module.exports={addTestimonial}

//gett all Testimonials

const getAllTestimonials = async (request, response) => {
    try {
        const testimonials = await Testimonial.find({Active : true})
        response.status(201).json(testimonials);
    }
    catch (error) {
        console.log("error in getting testimonials", error)
    }
}
//exports.getAllTestimonials = getAllTestimonials;

//update a testimonial

const updateTestimonial = async (request, response) => {
    const _id = request.params.id;
    const data = request.body;
    try {
        const testimonial = await Testimonial.findByIdAndUpdate(
            { _id },
            { $set: data },
            { new: true }
        )
        if (!testimonial) {
            return response.status(404).json("not found");
        }
        return response.status(200).json(testimonial);
    } catch (error) {
        console.log(error, "error :")
    }
}

//exports.updateTestimonial= updateTestimonial;

//delete a testimonial

const deleteTestimonial = async (request, response) => {
    const _id = request.params.id;
    try {
        const testimonial = await Testimonial.findByIdAndUpdate({ _id },{$set:{Active:false}},{new:true});
        if (!testimonial) {
            return response.status(404).json("Testimonial does not exist ");
        }
        response.status(200).json(testimonial);

    } catch (error) {
        console.log("error", error);
    }
}
//exports.deleteTestimonial = deleteTestimonial;

module.exports ={addTestimonial,updateTestimonial,getAllTestimonials,deleteTestimonial}