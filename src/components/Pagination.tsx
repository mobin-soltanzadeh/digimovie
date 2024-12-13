import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


interface Props {
  size: number;
  countPerPage?: number;
  currentPage: number;
  setPage: (num: number) => void;
}

export default function Pagination({ size, countPerPage=10, currentPage, setPage }: Props) {
  let startPageNum = 1;
  let endPageNum = Math.ceil(size/countPerPage);

  console.log(startPageNum, endPageNum)
  
  let pageNumbers: any[] = [];  

  if([1, 2, 3].includes(currentPage))
    pageNumbers = [1, 2, 3, 4, 5, -1, endPageNum-4, endPageNum-3, endPageNum-2, endPageNum-1, endPageNum];
  else if([endPageNum-2, endPageNum-1, endPageNum].includes(currentPage))
    pageNumbers = [1, 2, 3, 4, 5, -1, endPageNum-4, endPageNum-3, endPageNum-2, endPageNum-1,endPageNum];
  else if(currentPage > 3)
    pageNumbers = [1, -1, currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2, -2, endPageNum];
  
  if(endPageNum === 0)  return (
    <div className="w-full mx-auto text-center lg:px-10 xl:px-20 m-20">No gamed found</div>
  );

  if (startPageNum === endPageNum) return (
    <div className="BottomPagination"></div>
  );

  return (
    <div className="BottomPagination flex justify-center items-center gap-x-3 w-full px-4 mb-10">
      
      <button className={`relative size-6 lg:size-7 xl:size-9 rotate-45 hover:bg-zinc-700 hover:text-orange-500 rounded-md`} onClick={() => currentPage !== startPageNum && setPage(currentPage-1)} >
        <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-sm lg:text-lg`}><SlArrowLeft /></span>
      </button>
      
      {
        endPageNum <= 10 && 
        Array.from({length: endPageNum}, (_, index) => index + 1).map(pageNum => (
        <button key={pageNum} className={`relative size-6 lg:size-7 xl:size-9 rotate-45 ${currentPage === pageNum && "bg-zinc-700 text-orange-500"} hover:bg-zinc-700 hover:text-orange-500 rounded-md`} onClick={() => setPage(pageNum)} >
          <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-sm lg:text-lg`}>{pageNum}</span>
        </button>           
        ))
      }
      {
        endPageNum > 10 &&
        pageNumbers.map(pageNum => (
          <button key={pageNum} className={`relative size-6 lg:size-7 xl:size-9 rotate-45 ${currentPage === pageNum && "bg-zinc-700 text-orange-500"} hover:bg-zinc-700 hover:text-orange-500 rounded-md`} onClick={() => (pageNum === -1 || pageNum === -2) ? 0 : setPage(Number(pageNum))} >
            <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-sm lg:text-lg`}>{(pageNum === -1 || pageNum === -2) ? "..." : pageNum}</span>
          </button>
        ))
      }
      
      <button className={`relative size-6 lg:size-7 xl:size-9 rotate-45 hover:bg-zinc-700 hover:text-orange-500 rounded-md`} onClick={() => currentPage !== endPageNum && setPage(currentPage+1)} >
        <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-sm lg:text-lg`}><SlArrowRight /></span>
      </button>
      
    </div>
  );
}
