const Queryform = () => {
  return (
    <div className="querydiv">
      <form className="queryForm" type="submit">
        <div className="qname">
          <label htmlFor="queryname">Name : </label>
          <input id="queryname" placeholder="Enter your name here" required />
        </div>
        <div className="qemailid">
          <label htmlFor="queryemailid">Email ID : </label>
          <input id="queryemailid" placeholder="Enter your Email ID" required />
        </div>
        <div className="qquery">
          <label htmlFor="queryquery">Query : </label>
          <input id="queryquery" placeholder="Enter your Query" required />
        </div>
        <button className="querybtn">Submit</button>
      </form>
    </div>
  );
};
export default Queryform;
