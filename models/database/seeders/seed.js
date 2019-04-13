import mongoose from 'mongoose';
import database from '../../../models/database/database';
import CustomerSeeder from './customer';
import ShippingRegionSeeder from './shipping-region';


mongoose.set('useCreateIndex', true);
database.connect(process.env.MONGO_URI);

CustomerSeeder.generateFakeCustomers();
ShippingRegionSeeder.generateFakeShippingRegion();