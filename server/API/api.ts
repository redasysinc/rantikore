import axios from 'axios';
import Router from '@koa/router';
import os from "os";
import Doclist from "../data/doclist.ts";

const _ = Router();

_.get('/api', async (ctx) => {
    ctx.body = "I'm alive"
})
_.get('/api/getUsername', async (ctx) => {
    ctx.set('Content-Type', 'application/json');
    ctx.body = {username: os.userInfo().username};
})
_.get('/api/doclist', async (ctx, next) => {
    const npi = ctx.query['npi']
    const options = {
        method: 'GET',
        //url: 'https://us-doctors-and-medical-professionals.p.rapidapi.com/search_npi',
        params: {npi},//npi: '1033112214'
        headers: {
            'x-rapidapi-key': 'e2afbacb12msh7c60c3d42d0f74fp176006jsn4c588e3ceaed',
            'x-rapidapi-host': 'us-doctors-and-medical-professionals.p.rapidapi.com'
        }
    }
    if (Doclist) {
        ctx.body = Doclist
        return;
    }
    let res = []
    try {
        //const response = await axios.request(options);
        //ctx.body = JSON.parse(response.data.Data);
    } catch (error) {
        console.error(error);
    }
});
_.get('/api/mental', async (ctx, next) => {
    const options = {
        method: 'GET',
        // url: 'https://mental-health-care-file.p.rapidapi.com/timePeriod',
        params: {
            limit: '1000',
            orderBy: 'asc',
            value: '0',
            index: '0'
        },
        headers: {
            'x-rapidapi-key': 'e2afbacb12msh7c60c3d42d0f74fp176006jsn4c588e3ceaed',
            'x-rapidapi-host': 'mental-health-care-file.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        ctx.body = response.data

    } catch (error) {
        console.error(error);
    }
});
export default _;
