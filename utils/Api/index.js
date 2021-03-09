import Axios from 'axios';
import { BASE_URL, routes } from 'utils';
import Router from 'next/router';
import { parseCookies, destroyCookie } from 'nookies';

//GET para collections por Slug
export const getCollectionBySlug = async (slug, collection, res) => {
    try {
      const response = await api.get(`https://api.sportsdata.io/v3/nba/scores/json/teams?key=0138b6d456094a929e46d2a94aee14fe?slug=${slug}`);
      const responseData = response.data;
      if (responseData.length) {
        const dataObject = responseData[0];
        return { ...dataObject };
      } else {
        res.setHeader('location', '/404');
        res.statusCode = 302;
        res.end();
        return {};
      }
    } catch (error) {
      res.setHeader('location', '/404');
      res.statusCode = 302;
      res.end();
      return {};
    }
  };
  