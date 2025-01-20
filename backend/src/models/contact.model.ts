import { Schema, model } from "mongoose";

interface Contact {
  fullname: string;
  email: string;
  phone: string;
  emailSubject: string;
  message: string;
}

const contactSchema = new Schema<Contact>({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
    
  },
  phone: {
    type: String,
    required: true
  },
  emailSubject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
},{
  timestamps: true // created at and updated at
});

export const ContactModel = model<Contact>("Contact", contactSchema);