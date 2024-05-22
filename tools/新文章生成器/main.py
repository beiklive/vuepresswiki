import os

target_base_dir = "../../beiklive"


class ArticleHeader:
    def __init__(self):
        self.title = ""
        pass

    def GenPermalink(self):
        val_permalink = "/pages/"
        import uuid
        # 生成一个UUID对象
        random_uuid = uuid.uuid4()
        # 将UUID转换为字符串，并取前16位字符
        random_16_digit = str(random_uuid).replace('-', '')
        val_permalink += random_16_digit + "/"
        # print("permalink: " + val_permalink)
        return val_permalink

    def GenDate(self):
        import datetime
        val_date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        # print("date: " + val_date)
        return val_date

    def GenTitle(self):
        val_title = input("请输入文章标题：")
        # print("title: " + val_title)
        return val_title

    def GenCategories(self):
        val_categories = input("请输入文章分类，多个分类用空格分隔：")
        # print("categories: " + val_categories)
        # 处理分类，将多个分类用空格分隔，并在每行开头加上-符号
        val_categories = val_categories.split()
        val_categories = "\n".join(["  - " + category for category in val_categories])
        return val_categories

    def GenTags(self):
        val_tags = input("请输入文章标签，多个标签用空格分隔：")
        # print("tags: " + val_tags)
        # 处理标签，将多个标签用空格分隔，并在每行开头加上-符号
        val_tags = val_tags.split()
        val_tags = "\n".join(["  - " + tag for tag in val_tags])
        return val_tags

    def GenAuthor(self):
        val_author = input("请输入文章作者：")
        # print("author: " + val_author)
        return val_author

    def GenArticleHeader(self):
        val_permalink = self.GenPermalink()
        val_date = self.GenDate()
        val_title = self.GenTitle()
        self.title = val_title
        val_categories = self.GenCategories()
        val_tags = self.GenTags()
        val_author = self.GenAuthor()
        article_header = "---\n"
        article_header += "title: " + val_title + "\n"
        article_header += "permalink: " + val_permalink + "\n"
        article_header += "date: " + val_date + "\n"
        article_header += "categories:\n" + val_categories + "\n"
        article_header += "tags:\n" + val_tags + "\n"
        article_header += "author:\n"
        article_header += "  name: " + val_author + "\n"
        article_header += "  link: https://github.com/" + val_author + "\n"
        article_header += "---\n"
        # print(article_header)
        return article_header
    
    def getTitle(self):
        return self.title

class FileGenerator:
    def __init__(self):
        pass

    def ListDirAndSelect(self, target_base_dir):
        cur_dir = target_base_dir
        while True:
            print(">>> 当前目录：" + cur_dir)
            dir_list = os.listdir(cur_dir)
            # 不列出文件
            dir_list = [dir_name for dir_name in dir_list if os.path.isdir(os.path.join(cur_dir, dir_name))]
            print("0: 返回上一级目录")
            for i in range(len(dir_list)):
                print(str(i+1) + ": " + dir_list[i])
            select_num = input("请输入对应序号：(直接按回车结束选择): ")
            if select_num == "":
                break
            if int(select_num) < 0 or int(select_num) > len(dir_list):
                print("序号输入错误，请重新输入！")
                continue
            if int(select_num) == 0: # 返回上一级目录
                cur_dir = os.path.dirname(cur_dir)
                continue
            select_dir = os.path.join(cur_dir, dir_list[int(select_num)-1])
            if os.path.isdir(select_dir):
                cur_dir = select_dir
            else:
                print("输入的目录不存在，请重新输入！")
        print("最终选择的目录为：" + cur_dir)
        return cur_dir
    
    def NewFileCreate(self, target_dir, title, content):
        # 目录是否为空
        dir_list = os.listdir(target_dir)
        if len(dir_list) == 0:
            file_name_prefix = "00"
        else:
            # 获取目录下的文件名列表，并按数字排序
            file_name_list = [file_name for file_name in dir_list if os.path.isfile(os.path.join(target_dir, file_name))]
            file_name_list.sort(key=lambda x: int(x.split('.')[0]))
            # 获取最后一个文件的文件名

            last_file_name = file_name_list[-1]
            file_base_name = os.path.splitext(last_file_name)[0]
            # file_base_name 如果有 . 符号，则切割字符串，取后一半
            if "." in file_base_name:
                file_base_name = file_base_name.split(".")[-1]
            # last_file_name 中的空格替换为%20
            last_file_name = last_file_name.replace(" ", "%20")
            obsidian_link = f"\n::: tip 前一篇\n[{file_base_name}]({last_file_name})\n:::\n"
            content += obsidian_link

            # 获取最新文件名的编号
            file_name_prefix = str(int(file_name_list[-1].split('.')[0]) + 1).zfill(2)
        # 生成文件名
        file_name = file_name_prefix + "." + title + ".md"
        print("新文件名：" + file_name)
        # 打开文件并写入文章头部
        with open(os.path.join(target_dir, file_name), 'w', encoding="utf-8") as f:
            f.write(content)

if __name__ == '__main__':
    # 选择文件目录
    file_generator = FileGenerator()
    file_target_dir = file_generator.ListDirAndSelect(target_base_dir)
    # 生成文章头部
    article_header = ArticleHeader()
    file_header = article_header.GenArticleHeader()
    # 生成新文件并填充内容
    file_generator.NewFileCreate(file_target_dir, article_header.getTitle(), file_header)
