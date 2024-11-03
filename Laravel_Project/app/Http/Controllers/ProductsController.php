<?php

namespace App\Http\Controllers;

use App\Models\ProductsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\File;
use Illuminate\Support\Facades\URL;

class ProductsController extends Controller
{
    public function addproduct(Request $request){
        $product = new ProductsModel;
        $product->name = $request->name;
        $product->price = $request->price;
        $product->category = $request->category;
        if($request->hasFile('image')){
            $path = $request->file('image')->getClientOriginalName();
            $image = $request->file('image')->storeAs('productImages', $path,'product');
            // dd($image);
            $product->image = $image;
        }

        $product->save();
        // dd(asset('images'));
        return response()->json(['message' => 'Product added successfully', 'product' => $product]);
    }
    // public function deleteproduct($id){
    //     $product = ProductsModel::find($id)->delete();
    // }
    public function getall(){
        $products = ProductsModel::all();
        foreach ($products as $product) {
            $product->image = asset($product->image);
        }
        return response()->json(['messages'=>'success', 'data'=> $products]);
    }
    // public function selectproduct($id)
    // {
    //     $x = ProductsModel::find($id);
    //     return response("product selected");
    // }
    // public function updateproduct(Request $request, $id){
    //     $newproduct = ProductsModel::find($id);
    //     $newproduct->name = $request->newname;
    //     $newproduct->price = $request->newprice;
    //     $newproduct->category = $request->newcategory;
    //     $newproduct->save();
    //     return response('Product Updated Successfully');
    // }
    public function updateproduct(Request $request, $id){
        $updateproduct = ProductsModel::findOrFail($id);
        $updateproduct->update($request->all());
        return 'Product Updated Successfully';
    }
    public function deleteproduct($id){
        $delete = ProductsModel::findOrFail($id);
        $delete->delete();
        return response('Product Deleted Successfully');
    }
    public function uploadImage(Request $request){
        
    }
    
}
