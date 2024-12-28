import { GraphQLLocalStrategy } from "graphql-passport";
import User from "../models/userModel.js";
import passport from "passport";
import bcrypt from "bcryptjs";


const passportConfig = async () => {

    passport.serializeUser((user, done) => {
        console.log("Serializing user");
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        console.log("Deserializing user");
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err);
        }
    });

    passport.use(
        new GraphQLLocalStrategy(async (username, password, done) => {
            try {
                const user = await User.findOne({ username });
                if (!user) throw new Error("Invalid username or password");

                const validPassword = await bcrypt.compare(password, user.password);

                if (!validPassword) throw new Error("Invalid username or password");

                return done(null, user);
            } catch (err) {
                return done(err);
            }
        })
    );

};

export default passportConfig;