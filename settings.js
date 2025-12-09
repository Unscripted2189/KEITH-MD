/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUy46jRhT9lai2tsZgwGBLLQWDzcM20A34Fc2iDAWUjQFX8TA96u1ssxhlnXWyj5S/ynxChLt7ZhbJpMOqqLq659x7zr0fQJZjihaoBZMPoCC4hiXqjmVbIDAB0yqKEAF9EMISgglYzMacO94m8dJfSyyMQk1qvdzgpIuhH3cDbTkvtjPVZ5fr+zvw1AdFdUhx8J2EQjqCqoEiC+oLU2bk2kewhy1KEC439/oso9d9j5fEODHuwFOXEWKCs3hWJOiMCEwXqHUgJm+jjxxoVYdkmK4opw89Vz8YA4tJHq9LPzyJx2UCF3bm7BVvy7+NfviwaYRE4Fa217N60d6aO9PTcUdkSFbDJJFNHt6L5iI4ZvkzfYrjDIVGiLISl+2b+97T3QenTVl/OYxpeL13Y2deXx7HIstwh8NRNVw0bLyTs9aYtxG/1OJlRFXTLaM5MlfWnBtJkmbvc83UjKUQbYQKOdfmPIzpt8Qd8uqV0//pu2ZytrrYF+J43pw4dedIRbDiF+7I40PF3dmJpi5Pe9Qwm9Pb6GeD2VWERyGfbxUYpH51iC9Teze9GscAsuKjMOd7ZHY8V+n9V/qwrMj3WO6lBFMfmucHdaxd57ZZe0Lhh71jdF9sFOFhxljyMksthLTdaahVuXQ9DU50t/TNhqyO2017rac1m7jIa6MoPvvWKFblu1tFJ9QaIZiwT31AUIxpSWCJ8+x2x4l9AMPaRQFB5a29oDGbEQ4uTWgIVZ7ZZoPlZOovpeQBi5vaJkcVklVGNbQ27kAfFCQPEKUo1DEtc9KuEKUwRhRMfnrfBxm6ls/CdXAc3wcRJrT0s6pIcxi+qvr6CIMgr7LSbbNA6Q6IgAnz9RqVJc5i2vWxyiAJElwjJYElBZMIphR9qRARFIJJSSr0ZWqVPOwaP9I1cz/abEEfnG+C4BBMwFDgRZYZjjiG4ydD8Uf6runSwqJ4l6ES9EF6C2P5oSCNGUHgJZ5lmC6ye+iDDHbJwOdPH3/7wc0zHHz+9Zc//vrz56JKKfr86ePvnQ4vVXSgISohTimYAGVpj3NhNZuZcFBLJ02TV7GsxDL4WvWrfZ7lcRiCmcgYBWJYX1cZ7bViW/pQVyXHHIabY6uaw5Oqx7Xb3P1Dkg4y3VqNtsO9OCe7AzOSyNUxFc9qW5/dKfeHc76mrTGws3FdFPVs/Xj2hAHDG1N2Rs+FckjQNBADmW/yIJwKhMdafJDjuw4tRDUO0LdgeKAzyvYEbb2IHX+qcd7O2J8ezB4xr3nY0Agq3sNRDiK+vjzKbvCoIFO1znQE7YFoOQ2Xn8c9csk9MZQdZrYeZQdLbZ6NfRus9GWh4ZvlOj273wij2354EeY/9X0m3tmQeep/k+Nl4/zL1E698YIv9dbObO4geabo0Eoiay1pBmobZutcituwkK/8kqHg6el9HxQpLKOcnMEEwCwk+c09JK86XxtZlH8HTJkahiLH867yFNJS/jorHj4jWsJzASasOOJFXmBZ6TnKIXmhQ5p07l3wic53xm/lonBLWL6OHpC7z5r3wNPfP4mgTpYHAAA=';
const dev = process.env.OWNER_NUMBER || '254717816004';
const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 
const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,  
  dev,
  session,
};

//must run
