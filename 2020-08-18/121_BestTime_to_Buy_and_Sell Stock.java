class Solution {
    public int maxProfit(int[] prices) {
        //입력값이 7,1,5,3,6,4 인 경우
        //가격 1에 사서 6에 파는 경우 수익이 가장 크게 나오게됨
        //7인 경우는 1의 과거 이기 때문에 1이후에 나온 값중에서만 팔아야함
        
        //수익이 이전까지 계산돈 수익보다 큰경우 대체함
        //만약 minPrice 를 따로 구하지 않고 모든경우를 계산하게 되면
        //정답을 구할수는 있는데 효율성이 떨어짐!
        
        int temp = 0;
        int priceLength = prices.length;
        int minPrice = Integer.MAX_VALUE;
        for(int i = 0; i < priceLength; i++) {
            if(prices[i]  < minPrice) {
                minPrice = prices[i];
            }else {
                int totalPrice = prices[i] - minPrice;
                if(totalPrice  > temp) {
                    temp = totalPrice;
                }
            }
        }
          return temp;
    }
}