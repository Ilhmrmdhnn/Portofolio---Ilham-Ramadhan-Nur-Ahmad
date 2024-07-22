import porto1 from '../assets/card.png';
import porto2 from '../assets/card2.png';
import porto3 from '../assets/card3.png';
import porto4 from '../assets/card4.png';
import porto5 from '../assets/card5.png';
import porto6 from '../assets/card6.png';
import porto7 from '../assets/card7.png';
import porto8 from '../assets/card8.png';
import porto9 from '../assets/card9.png';
import porto10 from '../assets/card10.png';
import porto11 from '../assets/card11.png';
import porto12 from '../assets/card12.png';

const Card = () => {
  return (
    <div className="flex flex-col lg:w-9/12 lg:flex-wrap gap-y-4 lg:flex-row w-full mb-20">
      <div className="flex flex-col lg:flex-row w-full gap-y-4 lg:gap-4">
        <div className="lg:flex-1 relative">
          <a href="https://github.com/Ilhmrmdhnn/Classification-Car" target="_blank" className="block relative">
            <img className="w-full rounded-lg" src={porto5} alt="card" />
            <div className="text-center mt-2 dark:text-dtitle">Classification Car</div>
          </a>
        </div>
        <div className="lg:flex-1 relative">
          <a href="https://github.com/Ilhmrmdhnn/Project_Classification_Logistic_Regression" target="_blank" className="block relative">
            <img className="w-full rounded-lg" src={porto2} alt="card" />
            <div className="text-center mt-2 dark:text-dtitle">Classification Gender</div>
          </a>
        </div>
        <div className="lg:flex-1 relative">
          <a href="https://github.com/Ilhmrmdhnn/Sentiment-Analysis-of-Election-2024-in-Indonesia" target="_blank" className="block relative">
            <img className="w-full rounded-lg" src={porto4} alt="card" />
            <div className="text-center mt-2 dark:text-dtitle">Sentiment Analysis of Election 2024 in Indonesia</div>
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-y-4 lg:gap-4">
        <div className="lg:flex-1 relative">
          <a href="https://github.com/Ilhmrmdhnn/Project_Healtcare_Dataset_Stroke" target="_blank" className="block relative">
            <img className="w-full rounded-lg" src={porto3} alt="card" />
            <div className="text-center mt-2 dark:text-dtitle">Healthcare Stroke Classification</div>
          </a>
        </div>
        <div className="lg:flex-1 relative">
          <a href="https://github.com/Ilhmrmdhnn/Predicted-BBCA-STOCK-USING-SMA-EMA" target="_blank" className="block relative">
            <img className="w-full rounded-lg" src={porto6} alt="card" />
            <div className="text-center mt-2 dark:text-dtitle">Predicted BBCA Stock Using SMA & EMA</div>
          </a>
        </div>
        <div className="lg:flex-1 relative">
          <a href="https://github.com/Ilhmrmdhnn/Project_Ketertarikan_Mahasiswa_UniversitasXXX_dalam_Berolahraga" target="_blank" className="block relative">
            <img className="w-full rounded-lg" src={porto1} alt="card" />
            <div className="text-center mt-2 dark:text-dtitle">Interest of Students at Universitas in Sports</div>
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-y-4 lg:gap-4">
        <div className="lg:flex-1 relative">
          <a href="https://github.com/Ilhmrmdhnn/Dashboard-CashFlow" target="_blank" className="block relative">
            <img className="w-full rounded-lg" src={porto7} alt="card" />
            <div className="text-center mt-2 dark:text-dtitle">Dashboard CashFlow Using Power BI</div>
          </a>
        </div>
        <div className="lg:flex-1 relative">
          <a href="https://github.com/Ilhmrmdhnn/Dashboard-Sales-Using-Power-BI" target="_blank" className="block relative">
            <img className="w-full rounded-lg" src={porto8} alt="card" />
            <div className="text-center mt-2 dark:text-dtitle">Dashboard Sales Using Power BI</div>
          </a>
        </div>
        <div className="lg:flex-1 relative">
          <a href="https://github.com/Ilhmrmdhnn/Dashboard-Online-Sales-Using-Power-BI" target="_blank" className="block relative">
            <img className="w-full rounded-lg" src={porto9} alt="card" />
            <div className="text-center mt-2 dark:text-dtitle">Dashboard Online Sales Using Power BI</div>
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-y-4 lg:gap-4">
        <div className="lg:flex-1 relative">
          <a href="https://github.com/Ilhmrmdhnn/Flight-Operations-Dashboard" target="_blank" className="block relative">
            <img className="w-full rounded-lg" src={porto10} alt="card" />
            <div className="text-center mt-2 dark:text-dtitle">Flight Operation Dashboard Using Power BI</div>
          </a>
        </div>
        <div className="lg:flex-1 relative">
          <a href="https://github.com/Ilhmrmdhnn/Historical-Weather-Data-Analysis" target="_blank" className="block relative">
            <img className="w-full rounded-lg" src={porto11} alt="card" />
            <div className="text-center mt-2 dark:text-dtitle">Historical Weather Data Analysis Using Power BI</div>
          </a>
        </div>
        <div className="lg:flex-1 relative">
          <a href="https://github.com/Ilhmrmdhnn/Predict-and-Growth-analyst-employee" target="_blank" className="block relative">
            <img className="w-full rounded-lg" src={porto12} alt="card" />
            <div className="text-center mt-2 dark:text-dtitle">Predict & Growth Analyst Employee</div>
          </a>
        </div>
      </div>
      {/* View more link */}
      <div className="text-center">
        <a href="https://github.com/Ilhmrmdhnn" target="_blank" className="text-title dark:text-dtitle text-xl font-medium mb-3 hover:underline">View more &rarr;</a>
      </div>
    </div>
  );
}

export default Card;
