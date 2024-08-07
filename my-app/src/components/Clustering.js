// import React from 'react';
// import './Clustering.css'; // Import CSS for styling

// const Clustering = () => {
//   const categories = [
//     { type: '金融产品', items: ['贵金属', '石油', '外汇'] },
//     { type: '行业', items: ['家电', '航空航天', '科技'] },
//     { type: '股票', items: ['大A股', '美股'] },
//     { type: '时间', items: ['最新消息', '历史数据'] },
//   ];

//   return (
//     <div className="clustering">
//       {categories.map(category => (
//         <div key={category.type} className="category">
//           <h3>{category.type}</h3>
//           <ul>
//             {category.items.map(item => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Clustering;

import React, { useState, useEffect } from 'react';
import './Clustering.css';

const Clustering = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch or update categories here
    setCategories([
      { type: '金融产品', items: ['贵金属', '石油', '外汇'] },
      { type: '行业', items: ['家电', '航空航天', '科技'] },
      { type: '股票', items: ['大A股', '美股'] },
      { type: '时间', items: ['最新消息', '历史数据'] },
    ]);
  }, []);

  return (
    <div className="clustering">
      {categories.map(category => (
        <div key={category.type} className="category">
          <h3>{category.type}</h3>
          <ul>
            {category.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Clustering;
