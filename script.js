import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 130,
  duration: '120s',
};

// The function that defines VU logic.
//
// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more
// about authoring k6 scripts.
//
export default function() {
  // http.get('https://test.k6.io');
  http.get('http://api-load-balancer-1736600422.ap-southeast-1.elb.amazonaws.com');
  sleep(1);
}
