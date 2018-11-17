# Uses python3
import sys

def binary_search(haystack, start, end, needle):
    if end == 0:
        return -1
    middle = int(start + (end - start)/2)
    if haystack[middle] == needle:
        return middle
    elif needle < haystack[middle]:
        return binary_search(haystack, start, middle, needle)
    else: 
        return binary_search(haystack, middle + 1, end, needle)

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    haystack = data[1 : n + 1]
    needles = data[n + 2:]
    for needle in needles:
        print(binary_search(haystack, 0, len(haystack) - 1, needle), end = ' ')