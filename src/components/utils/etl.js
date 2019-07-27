const apiResp = [
  {
    'Global Quote': {
      '01. symbol': 'AAPL',
      '02. open': '207.4800',
      '03. high': '209.1100',
      '04. low': '207.1400',
      '05. price': '207.7400',
      '06. volume': '17618874',
      '07. latest trading day': '2019-07-26',
      '08. previous close': '207.0200',
      '09. change': '0.7200',
      '10. change percent': '0.3478%',
    },
  },
  {
    'Global Quote': {
      '01. symbol': 'IBM',
      '02. open': '151.0000',
      '03. high': '151.4100',
      '04. low': '150.1000',
      '05. price': '151.3600',
      '06. volume': '2697904',
      '07. latest trading day': '2019-07-26',
      '08. previous close': '150.3900',
      '09. change': '0.9700',
      '10. change percent': '0.6450%',
    },
  },
  {
    'Global Quote': {
      '01. symbol': 'MSFT',
      '02. open': '140.3700',
      '03. high': '141.6750',
      '04. low': '140.3100',
      '05. price': '141.3400',
      '06. volume': '19037600',
      '07. latest trading day': '2019-07-26',
      '08. previous close': '140.1900',
      '09. change': '1.1500',
      '10. change percent': '0.8203%',
    },
  },
];

export const getCurrentDate = () => {
  let today = new Date();
  let dd = today.getDate();

  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${yyyy}-${mm}-${dd}`;
};

export const parseAPIResponse = response => {
  return response.reduce((accum, data) => {
    const {
      '01. symbol': name,
      '05. price': price,
      '10. change percent': changePercent,
    } = data['Global Quote'];
    return accum.concat({ name, price, changePercent });
  }, []);
};

// console.log(parseAPIResponse(apiResp));
