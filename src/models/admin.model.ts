import { model, models, Schema } from "mongoose";

const adminSchema = new Schema({

})

const Admin = models.Admin || model('Admin', adminSchema);

export default Admin;