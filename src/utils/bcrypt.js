import bcrypt from 'bcryptjs'

export const hashPassword = (password) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
};

export const compareHash = (password, hashedPass) => {
    return bcrypt.compareSync(password, hashedPass);
};
