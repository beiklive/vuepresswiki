import os
import argparse

def list_files(startpath, output_file):
    base_url = "http://doc.beiklive.top/"
    with open(output_file, 'w', encoding='utf-8') as f:
        for root, dirs, files in os.walk(startpath):
            for file in files:
                # 获取相对于起始路径的相对路径
                relative_path = os.path.relpath(os.path.join(root, file), startpath)
                # 构建完整的 URL
                full_url = base_url + relative_path.replace("\\", "/")
                # 写入文件
                f.write(full_url + '\n')

def main():
    parser = argparse.ArgumentParser(description='列出指定路径下的所有文件并保存到文件中')
    parser.add_argument('startpath', help='起始路径')
    parser.add_argument('output_file', help='输出文件路径')
    args = parser.parse_args()

    list_files(args.startpath, args.output_file)

if __name__ == "__main__":
    main()
