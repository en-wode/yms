<template>
  <div class="bookcover">
    <div class="ms-doc">
      <h3>批量上传无水印封面</h3>
      <article>
        <el-row>
          <el-col :span="10">
            <div class="book-cover_rule">
              <ul>
                <h4>封面要求：</h4>
                <li>1、只能上传规格为200*250像素,文件大小40KB内的jpg图片；</li>
                <li>2、封面图片要求简洁舒适，书名、笔名等文字清晰，图片清晰；</li>
                <li>3、禁止上传任何有黄色、暴力、血腥、广告宣传或者不适合公众欣赏的封面，一经发现即做禁书处理；</li>
                <li>4、为保护肖像权，禁止上传任何以真实人物照片制作的封面。</li>
                <li>5、封面图片必须含有yanqingfan.com或有乐中文网的字样才可以通过审核。</li>
              </ul>
              <ul>
                <h4>上传规则：</h4>
                <li>1、图片成功上传后，可在本页面内见到封面效果，工作人员会在一个工作日内完成封面的审核工作，如封面内容没有违背上述5条封面要求，就会通过审核，审核通过后即时后台生效。您可以在一个工作日后欣赏到新封面。”</li>
                <li>2 如果封面已经上传并审核成功后,您又再次上传封面,则之前已经上传的封面将会被删除,同时新上传的封面将需要再次等待审核才会正常显示,请注意备份保存老的封面。</li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-upload
            class="upload-cover"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            :onSuccess="uploadSuccess"
            :onError="uploadError"
            :before-upload="beforeAvatarUpload"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-row>
        <div></div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleCurrentChange (val) {
        this.cur_page = val;
        this.getData();
      },
      handleSelectionChange (val) {
        console.log(val);
      },
      search () {
        this.is_search = true;
      }
    }
  };
</script>


