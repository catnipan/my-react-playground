const idHoc = component => component;

export default (...hocs) => {
  return hocs.reduceRight((prevHoc, currHoc) => component => currHoc(prevHoc(component)), idHoc);
}