import { Request } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Users } from 'src/users/entities/user.entity';
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';
import * as path from 'path';
export interface User {
  id: string;
}

// interface AuthenticatedRequest extends Request {
//   user: User;
// }
export const getUserId = (request: Request): string => {
  return request['user'].id as string;
};

export const getUserData = (request: Request): Users => {
  return request['user'];
};

export const generatePDF = (createUserDto: CreateUserDto): Promise<string> => {
  const doc = new PDFDocument();
  const pdfPath = path.join(
    __dirname,
    'temp',
    `user_registration_form_${Date.now()}.pdf`,
  );

  // Pipe the PDF to a file
  doc.pipe(fs.createWriteStream(pdfPath));

  // Title
  doc.fontSize(16).text('User Registration Details', { align: 'center' });
  doc.moveDown();

  // User Details
  doc.fontSize(12).text(`First Name: ${createUserDto.firstName}`);
  doc.text(`Last Name: ${createUserDto.lastName}`);
  doc.text(`Username: ${createUserDto.userName}`);
  doc.text(`Email: ${createUserDto.email}`);
  doc.text(`Role: ${createUserDto.role}`);
  doc.text(`Gender: ${createUserDto.gender}`);
  doc.text(`Profile: ${createUserDto.profile || 'N/A'}`);
  doc.text(`Language: ${createUserDto.language || 'N/A'}`);
  doc.text(`Timezone: ${createUserDto.timezone || 'N/A'}`);
  doc.text(`Website: ${createUserDto.website || 'N/A'}`);
  doc.text(`Social Media Link: ${createUserDto.socialMediaLink || 'N/A'}`);
  doc.text(`Membership Status: ${createUserDto.membershipStatus || 'N/A'}`);
  doc.moveDown();

  // Addresses
  if (createUserDto.addresses && createUserDto.addresses.length > 0) {
    doc.text('Addresses:', { underline: true });
    createUserDto.addresses.forEach((address, index) => {
      doc.text(
        `Address ${index + 1}: ${address.addressLine}, ${address.state}, ${address.pincode}, ${address.country}`,
      );
    });
  }
  doc.moveDown();

  // Contacts
  if (createUserDto.contacts && createUserDto.contacts.length > 0) {
    doc.text('Contacts:', { underline: true });
    createUserDto.contacts.forEach((contact, index) => {
      doc.text(`Contact ${index + 1}: ${contact.contact_no}, ${contact.type}`);
    });
  }
  doc.moveDown();

  // Companies
  if (createUserDto.companies && createUserDto.companies.length > 0) {
    doc.text('Companies:', { underline: true });
    createUserDto.companies.forEach((company, index) => {
      doc.text(`Company ${index + 1}: ${company.name}, ${company.industry}`);
    });
  }
  doc.moveDown();

  // Renewal Due Date
  doc.text(`Renewal Due Date: ${createUserDto.renewalDueDate.toISOString()}`);

  doc.end();

  return new Promise((resolve) => {
    doc.on('finish', () => {
      resolve(pdfPath); // Return the path to the generated PDF
    });
  });
};
