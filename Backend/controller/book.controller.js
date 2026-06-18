import Book from "../model/book.model.js";

export const getBook=async(req,res)=>{ //synchronize asynchronically as data may takre tim eto deliver or fetch so wait
    try{
        const book = await Book.find();
        res.status(200).json(book);  //200 accept
    }catch (error){
        console.log("Error: ",error);
        res.status(500).json(error); //500 error
}    
    
};