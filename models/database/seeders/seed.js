import mongoose from 'mongoose';
import database from '../database';
import CustomerSeeder from './customer';
import ShippingRegionSeeder from './shipping-region';


mongoose.set('useCreateIndex', true);
database.connect(process.env.MONGO_URI);

// Run all the seeders
CustomerSeeder.generateFakeCustomers();
ShippingRegionSeeder.generateFakeShippingRegion();
