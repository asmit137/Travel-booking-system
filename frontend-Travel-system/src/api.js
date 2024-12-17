import axios from 'axios';

const API = axios.create({ baseURL: 'https://travel-booking-system-2ub1.onrender.com' });

export const fetchPackages = () => API.get('/packages');
export const fetchPackageById = (id) => API.get(`/packages/${id}`);
export const createBooking = (data) => API.post('/bookings/createbookings', data);
export const fetchBookings = () => API.get('/bookings/getbookings');
export const deleteBooking = (id) => API.delete(`/bookings//deletebooking/${id}`);
export const createPackage = (data) => API.post('/packages/admin', data);
export const deletePackage = (id) => API.delete(`/packages/admin/${id}`);
export const updatePackage = (id) => API.put(`/packages/adminupdate/${id}`);
