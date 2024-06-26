import React, {useEffect, useState} from 'react';
import { history, useSearchParams } from 'umi';
import SwaggerUI from 'swagger-ui-react';
import "./swagger-ui.css"

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  /*const requestInterceptorReact = (requestObj: any) => {
    requestObj.headers['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    requestObj.headers['Cache-Control'] = 'no-cache';
    requestObj.headers['Pragma'] = 'no-cache';

    if(requestObj.url!=`/hui3.wang/swagger-view/-/raw/${branch}/${urlSwagger}`)
      requestObj.url = `${requestObj.url}?random=${random}`
  }*/

  useEffect(()=>{
    console.log(searchParams.get('url'))
  },[])
  
  return (
    <SwaggerUI url={searchParams.get('url')} docExpansion={"none"} deepLinking={true}/>
  );
}
