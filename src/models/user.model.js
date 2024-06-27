import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    username:{
        type: String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true
    },
    email:{
        type: String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    fullname:{
        type: String,
        required : true,
        trim : true,
        index: true
    },
    avatar:{
        type:String,
        required:true
    },
    coverimage:{
        type:String
    },
    watchhistory:[
        {
            type:Schema.Types.ObjectId,
            ref:video
        }
    ],
    password:{
        type:String,
        required: [true,'Password is required'],
    },
    refreshtoken:{
        type:String
    }
},
    {timestamps:true}

)

userSchema.pre("save",async function(next){
    if (this.isModified("password")){
        this.password = bcrypt.hash(this.password, 10)
        next()
    }
})

userSchema.methods.isPasswordCorrect = async function (password){
    await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign({
        __id: this._id,
        email: this.email,
        username:this.username,
        fullname:this.fullname
    },
    process.env.ACCESS_TOKENSECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userSchema.methods.refreshAccessToken = function(){
    jwt.sign({
        __id: this._id
    },
    process.env.REFRESH_TOKENSECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const user = mongoose.model("user",userSchema)