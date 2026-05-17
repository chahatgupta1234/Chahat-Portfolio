import sys

def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]

    fib_sequence = [0, 1]
    for i in range(2, n):
        next_value = fib_sequence[-1] + fib_sequence[-2]
        fib_sequence.append(next_value)

    return fib_sequence

def main():
    if len(sys.argv) != 2:
        print("Usage: python fibonacci.py <number>")
        sys.exit(1)
    
    try:
        num_terms = int(sys.argv[1])
        if num_terms <= 0:
            raise ValueError("Number of terms must be a positive integer")
        
        result = fibonacci(num_terms)
        print(result)

if __name__ == "__main__":
    main()