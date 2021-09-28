 class CountDown {
	 function countDown(n) {
		if(n == 0) return;

	console.log(n + "...");
		// waitASecond();
		countDown(n-1);
	}

	//  void waitASecond() {
	// 	try {
	// 		Thread.sleep(1000);
	// 	}
	// 	catch (InterruptedException ignore) {
	// 	}
	// }

	//  static void main(String[] args) {
	// 	CountDown c = new CountDown();
	// 	c.countDown(10);
	// }
}
				
//  Save
// After Refactoring:

 class CountDown {
	 function countDown(n) {
		while(n > 0) {
			console.log(n + "...");
			// waitASecond ();
			n -= 1;
		}

	}

	//  void waitASecond() {
	// 	try {
	// 		Thread.sleep(1000);
	// 	}
	// 	catch (InterruptedException ignore) {
	// 	}
	// }

	//  static void main(String[] args) {
		// CountDown c = new CountDown();
		// c.countDown(10);
	// }
}
