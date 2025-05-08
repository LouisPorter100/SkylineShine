"use client";

import Image from 'next/image';
import { useState } from 'react';

export const metadata = {
  title: 'Contact Us - Skyline Shine',
  description: 'Get in touch with Skyline Shine for a free quote or any inquiries.',
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'United States',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    referral: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API endpoint)
    console.log('Form data submitted:', formData);
    alert('Thank you for your request! We will get back to you soon.');
    // Reset form if needed
    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: 'United States',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        referral: '',
        message: '',
    });
  };

  const countries = ["United States", "Canada", "Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Ascension Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Caribbean Netherlands", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo - Brazzaville", "Congo - Kinshasa", "Cook Islands", "Costa Rica", "Côte d’Ivoire", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong SAR China", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao SAR China", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territories", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "São Tomé & Príncipe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St. Barthélemy", "St. Helena", "St. Kitts & Nevis", "St. Lucia", "St. Martin", "St. Pierre & Miquelon", "St. Vincent & Grenadines", "Sudan", "Suriname", "Svalbard & Jan Mayen", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad & Tobago", "Tristan da Cunha", "Tunisia", "Türkiye", "Turkmenistan", "Turks & Caicos Islands", "Tuvalu", "U.S. Virgin Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Wallis & Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
  const referralOptions = ["Instagram", "Facebook", "Nextdoor", "Friend/Family", "Other"];

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-160px)]"> {/* 160px approx for header + footer */}
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-16 overflow-y-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">New Request</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
            <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
            <p className="mt-1 text-xs text-gray-500">By providing your email, you consent to receiving marketing emails and promotions. You can unsubscribe at any time.</p>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
            <p className="mt-1 text-xs text-gray-500">By providing your phone number, you agree to receive text messages (SMS) from Skyline Shine LLC. You can unsubscribe at any time by replying STOP. Message and data rates may apply. Message frequency varies.</p>
          </div>
          
          <fieldset>
            <legend className="block text-sm font-medium text-gray-700 mb-1">Address</legend>
            <div className="space-y-4 mt-1">
              <div>
                <label htmlFor="country" className="block text-xs font-medium text-gray-600">Country</label>
                <select id="country" name="country" value={formData.country} onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm">
                  {countries.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="address1" className="block text-xs font-medium text-gray-600">Address Line 1 <span className="text-red-500">*</span></label>
                <input type="text" name="address1" id="address1" value={formData.address1} onChange={handleChange} required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="address2" className="block text-xs font-medium text-gray-600">Address Line 2</label>
                <input type="text" name="address2" id="address2" value={formData.address2} onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-xs font-medium text-gray-600">City</label>
                  <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="state" className="block text-xs font-medium text-gray-600">State/Province</label>
                  <input type="text" name="state" id="state" value={formData.state} onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-xs font-medium text-gray-600">Zip/Postal Code</label>
                  <input type="text" name="zip" id="zip" value={formData.zip} onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                </div>
              </div>
            </div>
          </fieldset>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">How Did You Find Us? <span className="text-red-500">*</span></label>
            <div className="mt-2 space-y-2">
              {referralOptions.map(option => (
                <div key={option} className="flex items-center">
                  <input id={`referral-${option}`} name="referral" type="radio" value={option} onChange={handleChange} checked={formData.referral === option} required className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300" />
                  <label htmlFor={`referral-${option}`} className="ml-3 block text-sm text-gray-700">{option}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message/Details</label>
            <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"></textarea>
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Submit Request
            </button>
          </div>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image 
          src="/images/contact-hero-background.jpeg" 
          alt="Modern skyscraper background" 
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}

