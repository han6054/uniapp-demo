export default {
	 setStorage(string, v) {
	    uni.setStorageSync(k, v);
	 },
	 getStorage(k) {
	    return uni.getStorageSync(k) || '';
	 },	  
	 clearS(k) {
		if (k) {
		   uni.removeStorageSync(k);
		} else {
		   uni.clearStorageSync();
		}
	  },
	  jumpTo(navigateType, url) {
		  	console.log(navigateType)
		    switch (navigateType) {
		        case 'switchTab': uni.switchTab({ url }); break;
		        case 'reLaunch': uni.reLaunch({ url }); break;
		        case 'navigateBack': uni.navigateBack(); break;
		        case 'navigateTo': uni.navigateTo({ url }); break;
		        case 'redirectTo': uni.redirectTo({ url }); break;
		        case 'yes': uni.redirectTo({ url }); break;// 同redirectTo
		        default: uni.navigateTo({ url }); break;
		      }
	  }
}