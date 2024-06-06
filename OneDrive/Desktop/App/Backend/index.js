const express = require('express');
const cors = require('cors');
const UserData = require('./Database');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');

const app = express();
const client = new OAuth2Client('101733863666-k87vrr48tai9170oi00koqbr67c6gnph.apps.googleusercontent.com');

const secret_key="shubham"

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/login", async (req, res) => {
    const { Name, Email, Password } = req.body;
    console.log(Name, Email, Password);

    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(Password, 10);

        const userData = new UserData({ name: Name, email: Email, password: hashedPassword });
        await userData.save();

        const token = jwt.sign({ userId: UserData._id }, secret_key);

        res.status(201).send({ message: 'User registered successfully',token });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send({ message: 'Registration failed' });
    }
});

app.post("/google-login", async (req, res) => {
    const { token } = req.body;
    console.log(token);

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: '101733863666-k87vrr48tai9170oi00koqbr67c6gnph.apps.googleusercontent.com',
        });

        const { name, email, password } = ticket.getPayload();

        let user = await UserData.findOne({ email });
        if (!user) {
            user = new UserData({ name, email, password });
            await user.save();

            const token = jwt.sign({ userId: UserData._id }, secret_key);
        }
        res.status(201).send({ message: 'User logged in successfully',token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).send({ message: 'Login failed' });
    }
});

app.listen(4000, () => {
    console.log("App is running on port 4000");
}); 
