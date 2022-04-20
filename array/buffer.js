var buffer = new ArrayBuffer(12);
 
  // Use of ArrayBuffer.isView function
  A = ArrayBuffer.isView(new Int32Array())
  console.log(A);