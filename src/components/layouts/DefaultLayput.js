import { Box } from '@mui/system';
import axios from 'axios';
import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { API, KEY_API } from 'utils/constants';
import { request } from 'utils/request';

const DefaultLayout = ({ children, showFooter = true }) => {
  const [categories, setCategories] = useState([]);
  const [categoriesById, setCategoriesById] = useState([]);
  const [locations, setLocations] = useState([]);

  const getCategories = async () => {
    return await request(API.CATEGORIES_ALL, 'GET');
  };

  const getCategoriesById = async (id) => {
    return await request(API.CATEGORIES_BY_ID.replace(KEY_API, id), 'GET');
  };

  const getLocations = async () => {
    return await request(API.LOCATION, 'GET');
  };
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res?.data);
    });
    getLocations().then((res) => {
      setLocations(res?.data);
    });
  }, []);

  useEffect(() => {
    if (categories?.length > 0) {
      const a = Promise.all(
        categories.map((el) => getCategoriesById(el?.id))
      ).then((res) => {
        setCategoriesById(res);
      });
    }
  }, [categories]);

  useEffect(() => {
    if (categoriesById?.length > 0) {
      const arr = categories.map((el) => {
        const items = categoriesById.find(
          (e) =>
            e?.data?.length > 0 && e?.data[0]?.product?.categoryId === el.id
        );
        if (items) {
          el.items = items?.data;
        }
        return el;
      });
    }
  }, [categoriesById]);
  return (
    <Box>
      <Head></Head>
      <Header categories={categories} locations={locations} />
      <Box
        mt={{
          xs: '89px',
          sm: '73px',
          md: '85px',
          lg: '85px',
        }}
      >
        {children}
      </Box>
      {showFooter && <Footer />}
    </Box>
  );
};

export default DefaultLayout;
