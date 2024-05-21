export function PlumbsPdf() {
  return (
    <div className='flex'>
      {/* Display PDF in iframe */}
      <iframe
        src="/Plumbs-veterinary-drug-handbook.pdf"
        width="200%"
        height="800px"
      />
      <h1 className="bg-violet-300 ml-4 h-20 text-white border-violet-400 border-2 rounded-md ">
        <strong>Hint:</strong> press ctrl + F to search
      </h1>
    </div>
  );
}
