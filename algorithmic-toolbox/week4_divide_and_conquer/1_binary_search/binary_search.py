# Uses python3
import sys

def binary_search(haystack, needle):
    start, end = 0, len(haystack)
    if end == 0:
        return -1
    middle = int((end - start)/2)
    if haystack[middle] == needle:
        return middle
    elif needle < haystack[middle]:
        return binary_search(haystack[:middle], needle)
    else: 
        return binary_search(haystack[middle + 1:], needle)

if __name__ == '__main__':
    #input = sys.stdin.read()
    #data = list(map(int, input.split()))
    #n = data[0]
    haystack = [1,2,3,4,5] #data[1 : n + 1]
    needles = [4,5]#data[n + 2:]
    for needle in needles:
        print(binary_search(haystack, needle), end = ' ')