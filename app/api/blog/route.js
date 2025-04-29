import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/blogModel";
import { writeFile } from 'fs/promises'
const fs = require('fs');

const { NextResponse } = require("next/server");

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

//API Endpoint To Get All Blogs
export async function GET(request) {
    const blogID = request.nextUrl.searchParams.get("id");
    if (blogID) {
        const blog = await BlogModel.findById(blogID);
        return NextResponse.json(blog);
    }
    else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs })
    }
}

// API Endpoint For Uploading Blogs
export async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        authorImage: `${formData.get('authorImage')}`,
    }

    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({ success: true, msg: "Blog Added" });
}

// Creating API Endpoint to delete Blog
export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`, () => { });
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({ msg: "Blog Deleted" })
}