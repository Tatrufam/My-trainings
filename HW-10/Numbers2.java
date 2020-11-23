import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Numbers2 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String value = reader.readLine();
        String[] split = value.split("\\s+");
        List<Integer> numbers = new ArrayList<>();
        System.out.print("My numbers: ");
        for (String num: split) {
            numbers.add(Integer.parseInt(num));
        }
        System.out.println(numbers);

        Map<Integer, Integer> hash = new HashMap<Integer, Integer>();
        for (int i=0; i< numbers.size(); i++){
           int key = numbers.get(i);
            if (hash.containsKey(key)) {
                hash.put(key, hash.get(key)+1);
            } else hash.put(key, 1);
        }
        for (Map.Entry entry : hash.entrySet()) {
            int k = (Integer) entry.getKey();
            if ((Integer) entry.getValue() > 1) {
                System.out.print("Key: " + k + " : ");
                for (int i=0; i< numbers.size(); i++) {
                    if (k == numbers.get(i))
                        System.out.print(" " + i);
                }
                System.out.println();
            }
        }
    }
}

