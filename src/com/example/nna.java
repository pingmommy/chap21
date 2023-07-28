package com.example;

public class nna {
	
	public static void main(String[] args) {
		long epoch = System.currentTimeMillis();
		
		System.out.println(epoch);
		
		long s = epoch/1000;
		System.out.println(s);
		
		long m = s/60;
		System.out.println(m);
		
		long h = m/60;
		System.out.println(h);
		
		long h2 = h%60;
		System.out.println(h2);
		
		long kh= h2+9;
		System.out.println(kh);
		
		int m2 = (int)h%24;
		System.out.println(m2);
		
	
		
		
	}

}
