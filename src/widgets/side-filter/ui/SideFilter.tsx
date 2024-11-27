import { memo, useEffect, useState } from 'react';
import {
  Box, Typography, Slider, FormControlLabel, Checkbox,
} from '@mui/material';
import { useStore } from '../../../app/store';

function SideFilter() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 0]);
  const { ordersStore } = useStore();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (priceRange[0] || priceRange[1]) {
        ordersStore.fetchOrders({
          minPrice: priceRange[0],
          maxPrice: priceRange[1],
        });
      }
    }, 800);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [ordersStore, priceRange]);

  const changePriceRange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
    ordersStore.clearOrders();
    ordersStore.setOrdersPage = 1;
  };
  return (
    <Box
      sx={{
        padding: '2.14rem',
        width: '100%',
        maxWidth: '300px',
        background: 'linear-gradient(103.72deg, rgba(117, 117, 117, 0.18) -2.34%, rgba(145, 145, 145, 0.18) 81.02%)',
        backgroundBlendMode: 'overlay, normal',
        backdropFilter: 'blur(13.5px)',
        borderRadius: '.71rem',
        '@media (max-width: 767px)': {
          '&': {
            maxWidth: 'inherit',
          },
        },
      }}
      color={(theme) => theme.palette.text.secondary}
    >
      <Typography marginBottom="1.71rem" fontWeight="500">Фильтры:</Typography>
      <Typography fontWeight="500" marginBottom=".71rem">Цены за час</Typography>
      <Slider
        value={priceRange}
        sx={(theme) => ({
          marginBottom: '1.42rem',
          '& .MuiSlider-thumb': {
            borderRadius: '3px',
            width: '.5rem',
            backgroundColor: theme.palette.text.secondary,
          },
        })}
        min={100}
        color="secondary"
        max={30000}
        onChange={changePriceRange}
      />
      <Box display="flex" justifyContent="space-between" marginBottom="1.42rem">
        <Typography
          sx={(theme) => ({
            border: '1px solid',
            borderColor: theme.palette.secondary.main,
            borderRadius: '.71rem',
          })}
          padding=".42rem 1.14rem"
        >
          {priceRange[0]}
        </Typography>
        <Typography
          sx={(theme) => ({
            border: '1px solid',
            borderColor: theme.palette.secondary.main,
            borderRadius: '.71rem',
          })}
          padding=".42rem 1.14rem"
        >
          {priceRange[1]}
        </Typography>
      </Box>
      <Typography fontWeight="500" marginBottom=".71rem">Виды фотосъемок</Typography>
      <Box display="flex" flexDirection="column">
        <FormControlLabel
          control={(
            <Checkbox
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                '&.Mui-checked': {
                  color: theme.palette.text.secondary,
                },
              })}
              color="secondary"
              size="small"
            />
          )}
          label="Свадебная"
        />
        <FormControlLabel
          control={(
            <Checkbox
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                '&.Mui-checked': {
                  color: theme.palette.text.secondary,
                },
              })}
              color="secondary"
              size="small"
            />
          )}
          label="Love story"
        />
        <FormControlLabel
          control={(
            <Checkbox
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                '&.Mui-checked': {
                  color: theme.palette.text.secondary,
                },
              })}
              color="secondary"
              size="small"
            />
          )}
          label="Семейная"
        />
        <FormControlLabel
          control={(
            <Checkbox
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                '&.Mui-checked': {
                  color: theme.palette.text.secondary,
                },
              })}
              color="secondary"
              size="small"
            />
          )}
          label="Питомцы"
        />
        <FormControlLabel
          control={(
            <Checkbox
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                '&.Mui-checked': {
                  color: theme.palette.text.secondary,
                },
              })}
              color="secondary"
              size="small"
            />
          )}
          label="Репортажная"
        />
        <FormControlLabel
          control={(
            <Checkbox
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                '&.Mui-checked': {
                  color: theme.palette.text.secondary,
                },
              })}
              color="secondary"
              size="small"
            />
          )}
          label="Модельные тесты"
        />
        <FormControlLabel
          control={(
            <Checkbox
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                '&.Mui-checked': {
                  color: theme.palette.text.secondary,
                },
              })}
              color="secondary"
              size="small"
            />
          )}
          label="TFP"
        />
      </Box>
    </Box>
  );
}

export default memo(SideFilter);
