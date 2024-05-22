import requests
import subprocess
import os
import time

def get_issues_titles(repo_owner, repo_name, token):
    url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/issues"
    headers = {
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github.v3+json'
    }
    titles = []
    page = 1

    while True:
        response = requests.get(url, headers=headers, params={'page': page, 'per_page': 100})
        if response.status_code != 200:
            print(f"Error: Unable to fetch issues (Status code: {response.status_code})")
            break

        issues = response.json()
        if not issues:
            break

        for issue in issues:
            titles.append(issue['title'])
        
        page += 1

    return titles

def create_github_issue(repo_owner, repo_name, token, issue_title, issue_body="", labels=[]):
    url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/issues"
    headers = {
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github.v3+json'
    }
    payload = {
        'title': issue_title,
        'body': issue_body,
        'labels': labels  # 标签名称列表，如 ['bug', 'enhancement']
    }

    response = requests.post(url, headers=headers, json=payload)

    if response.status_code == 201:
        print(f"Issue {issue_title} created successfully: {response.json()['html_url']}")
    else:
        print(f"Failed to create issue (Status code: {response.status_code})")
        print(f"Error message: {response.text}")

def find_md_files(directory):
    md_files = []  # 存储所有找到的 .md 文件路径

    # 使用 os.walk 遍历指定目录及其子目录
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):  # 找到后缀为 .md 的文件
                file_path = os.path.join(root, file)
                md_files.append(file_path)

    return md_files

def check_is_file_suffix_is_md(file_list):
    md_list = []
    for file_name in file_list:
        if file_name.endswith('.md'):
            md_list += [file_name]
    return md_list

def Get_file_title(file_name):
    # 获取文件标题
    with open(file_name, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        for line in lines:
            if line.startswith('title:'):
                return line.strip('title:').strip()

def Get_file_permalink(file_name):
    # 获取文件链接
    with open(file_name, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        for line in lines:
            if line.startswith('permalink:'):
                return line.strip('permalink:').strip()

def CreateNewCommentIssue(repo_owner, repo_name, token):

    # 获取前一次提交的文件列表
    file_list = find_md_files("../../beiklive/")

    # 筛选出md文件
    md_list = check_is_file_suffix_is_md(file_list)

    # 获取已经创建的issue列表
    issue_list = get_issues_titles(repo_owner, repo_name, token)

    for file_name in md_list:
        print("------------------------------------")
        title = Get_file_title(file_name)
        # print(title)
        if None != title:
            search_str = '「评论」' + title
            if search_str in issue_list:
                print(f"Issue already exists for {title}")
                pass
            else:
                print(f"Issue not exists for {title}")
                permalink = Get_file_permalink(file_name)
                print(permalink)
                issue_title = search_str    # 新Issue的标题
                issue_body = f"页面： https://beiklive.github.io/vuepresswiki{permalink}"  # 新Issue的内容（可选）
                labels = ["Comment", "Gitalk", permalink]    # 要添加的标签列表
                create_github_issue(repo_owner, repo_name, token, issue_title, issue_body, labels)
        time.sleep(10)






if __name__ == "__main__":
    repo_owner = "beiklive"  # 替换为仓库所有者
    repo_name = "vuepresswiki"    # 替换为仓库名称
    token=os.environ.get('GITHUB_TOKEN') #申请的github访问口令

    CreateNewCommentIssue(repo_owner, repo_name, token);
