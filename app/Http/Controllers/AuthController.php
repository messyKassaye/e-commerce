<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    //

    public function login(Request $request){
        try {

            //validate the incoming data first
            $request->validate([
              "email" => "email|required",
              "password" => "required"
            ]);
            //end of validation

            //select only email and password
            $credentials = request(["email", "password"]);
            if (!Auth::attempt($credentials)) {
              return response()->json([
                "status_code" => 403,
                "message" => "Unauthorized"
              ],403);
            }


            $user = User::where("email", $request->email)->first();
            if ( ! Hash::check($request->password, $user->password, [])) {
               return response()->json([
                "status_code" => 403,
                "message" => "Unauthorized"
              ],403);
            }
            $tokenResult = $user->createToken("authToken")->plainTextToken;
            return response()->json([
              "status_code" => 200,
              "token" => $tokenResult,
              "token_type" => "Bearer",
            ]);
          } catch (Exception $error) {
            return response()->json([
              "status_code" => 500,
              "message" => "Error in Login",
              "error" => $error,
            ]);
          }
    }



    public function signup(Request $request){

        try {

            //validate the incoming data first
            $request->validate([
              "name"=>"required",
              "email" => "email|required",
              "password" => "required"
            ]);
            //end of validation

            //check if email exist
            $userExistency = User::where('email',$request->email)->get();
            if(count($userExistency)<=0){
            
              $user = new User();
              $user->name = $request->name;
              $user->email = $request->email;
              $user->password = Hash::make($request->password);
              $user->save();

              //register user and send access token
                $tokenResult = $user->createToken("authToken")->plainTextToken;
                  return response()->json([
                    "status_code" => 200,
                    "token" => $tokenResult,
                    "token_type" => "Bearer",
                  ]);

            }else{
              return response()->json([
                'status'=>false,
                'status_code'=>409,
                'message'=>'Someone allready registered by this email address'
              ]);
            }
            
          } catch (Exception $error) {
            return response()->json([
              "status_code" => 500,
              "message" => "Error in signup",
              "error" => $error,
            ]);
          }
    }
}



