import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './Schemas/user.schema';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
    ) { }
    
    async signUp(signUpDto) {
        const { name, email, password } = signUpDto;
        const hashedPassword = await bcrypt.hash(password, 10);
         
    }
}
