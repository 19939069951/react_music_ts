import React, {Suspense} from 'react'
import {Link, useRoutes} from 'react-router-dom'
import routes from '@/router/router'
function App() {
  return (
    <div className="App">
      <div className='header'>
        <Link to='/discover'>发现音乐</Link>
        <Link to='/my'>我的音乐</Link>
        <Link to='/follow'>关注</Link>
        <Link to='/download'>下载客户端</Link>
      </div>
      <div className='main'>
        <Suspense fallback='加载中...'>
          {useRoutes(routes)}
        </Suspense>
      </div>
    </div>
  );
}

export default App
